FROM node

RUN mkdir /opt/apps
RUN mkdir /opt/apps/nod/

COPY bin /opt/apps/nod/bin
COPY public /opt/apps/nod/public
COPY routes /opt/apps/nod/routes
COPY views /opt/apps/nod/views
COPY app.js /opt/apps/nod/
COPY package.json /opt/apps/nod/

WORKDIR /opt/apps/nod/
RUN npm install

CMD [ "npm" , "run" , "start" ]
