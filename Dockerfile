FROM node:14-alpine AS builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build


FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["yarn", "start:prod"]
