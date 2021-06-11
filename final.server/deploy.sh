dotnet publish -c Release
docker build -t final.server . -f Dockerfile
docker tag final.server registry.heroku.com/ethanvach-keepr/web
docker push registry.heroku.com/ethanvach-keepr/web
heroku container:release web -a ethanvach-keepr
echo press any key
read end