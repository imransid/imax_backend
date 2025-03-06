# FROM node:alpine As development
# WORKDIR /usr/src/app
# COPY package*.json ./
# COPY prisma ./prisma/
# RUN npm install
# COPY . .
# RUN npm run build
# FROM node:alpine as production
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# COPY --from=development /usr/src/app/dist ./dist
# CMD ["node", "dist/apps/gateway/main"]





FROM node:20 As development

WORKDIR /usr/src/app

# Install OpenSSL dependencies
# RUN apt-get update && apt-get install -y \
#     libssl1.1 \
#     && rm -rf /var/lib/apt/lists/*

COPY package*.json yarn.lock ./

RUN yarn

COPY prisma ./prisma/

COPY . .

# RUN  npm rebuild bcrypt --build-from-source

RUN npx prisma generate

RUN yarn build


CMD ["node", "dist/apps/gateway/main"]

FROM node:20 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json yarn.lock./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/gateway/main"]