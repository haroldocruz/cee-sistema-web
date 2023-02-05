FROM node:14 as node-build
LABEL author="Haroldo Cruz"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . .
RUN npm run build:prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node-build /app/dist /usr/share/nginx/html
COPY ./.docker/prod/nginx-prod.conf /etc/nginx/conf.d/default.conf

# CRIAR IMAGEM
# docker build -t nginx-cee-sistema -f ./.docker/prod/nginx.prod.dockerfile .

# EXECUTAR 
# docker run -p 8085:80 nginx-cee-sistema

# ADICIONAR TAG (mudar <VERSION> para a versão que está no package.json)
# docker tag nginx-cee-sistema haroldocruz/nginx-cee-sistema:<VERSION>

# PUBLICAR NO GITHUB
# docker login
# docker push haroldocruz/nginx-cee-sistema:<VERSION>