FROM node:16-alpine as base
WORKDIR /app
COPY ./. ./.

FROM base as production
ENV NODE_ENV=production
RUN npm install --frozen-lockfile --production=false
#  Should be using the production build and the /dist output for deployment. But just for the sake of demonstration I am going to omit this part
#  RUN npm run build
COPY --chown=node:node . .
USER node
CMD npm run serve
