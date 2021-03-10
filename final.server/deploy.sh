dotnet publish -c Release
docker build -t final.server ./bin/Release/net5.0/publish
docker tag final.server registry.heroku.com/ethanvach-keepr/web
docker push registry.heroku.com/ethanvach-keepr/web
heroku container:release web -a ethanvach-keepr
echo press any key
read end