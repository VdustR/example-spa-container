ARG NODE_VERSION=17.0.1
ARG PNPM_VERSION=6.19.0

FROM node:$NODE_VERSION
ARG PNPM_VERSION
WORKDIR /src
RUN npm i -g pnpm@$PNPM_VERSION
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
RUN pnpm i
COPY app.ts app.ts
EXPOSE 80
CMD ["pnpm", "start"]
