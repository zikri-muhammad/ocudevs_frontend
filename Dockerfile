# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

COPY . .

EXPOSE 3002

ENV PORT 3002
RUN npm install

CMD ["npm", "run", "dev"]