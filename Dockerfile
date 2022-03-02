FROM node:14.19.0-buster-slim AS development

ENV HOME=/app

WORKDIR $HOME/

RUN apt-get update

RUN apt-get install -y \
  curl \
  net-tools \
  libaio1 \
  wget \
  alien \
  procps

RUN wget https://download.oracle.com/otn_software/linux/instantclient/215000/oracle-instantclient-basic-21.5.0.0.0-1.el8.x86_64.rpm
  # https://download.oracle.com/otn_software/linux/instantclient/215000/oracle-instantclient-sqlplus-21.5.0.0.0-1.el8.x86_64.rpm

RUN alien -i --scripts oracle-instantclient-*.rpm

RUN rm -f oracle-instantclient-*.rpm && apt-get -y autoremove && apt-get -y clean

ENV LD_LIBRARY_PATH=/usr/lib/oracle/21/client64/bin:$LD_LIBRARY_PATH

ENV PATH=/usr/lib/oracle/21/client64/bin:$PATH

COPY package*.json $HOME/

RUN npm i --only=development

EXPOSE 1521

CMD npm run start:dev
