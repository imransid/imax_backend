


FROM node:20 As development
WORKDIR /usr/src/app

# RUN apt-get update 


# Copy package files first
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN yarn install

# Generate Prisma client
RUN npx prisma generate

# Install bcrypt (consider using bcryptjs for Alpine)
RUN yarn add bcryptjs

COPY . .
RUN npm run build

FROM node:20 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/medicine/main"]



# FROM node:20 As development

# WORKDIR /usr/src/app

# COPY package*.json yarn.lock ./

# RUN yarn

# COPY prisma ./prisma/

# COPY . .

# # RUN  npm rebuild bcrypt --build-from-source

# RUN npx prisma generate

# RUN yarn build


# CMD ["node", "dist/apps/medicine/main"]

# FROM node:20 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json yarn.lock./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/apps/medicine/main"]