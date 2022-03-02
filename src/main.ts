import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const port = process.env.BACKEND_PORT || 9999

async function App() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  )

  const config = new DocumentBuilder()
    .setTitle('Backoffice Enterprise')
    .setDescription('Documentação referente aos Endpoint desenvolvidos na Backoffice Enterprise')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.enableCors()
  app.setGlobalPrefix('api')

  await app.listen(port, '0.0.0.0')
}

App()
  .then(() => console.info(`Application is running on Port: ${port}`))
  .catch(e => {
    console.error(`Execution failed. ${e}`)
    process.exit()
  })
