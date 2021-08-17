FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src

COPY *.sln ./
COPY SongsinkBL/*.csproj SongsinkBL/
COPY SongsinkDL/*.csproj SongsinkDL/
COPY SongsinkModel/*.csproj SongsinkModel/
COPY SongsinkTests/*.csproj SongsinkTests/
COPY SongsinkWebApi/*.csproj SongsinkWebApi/
RUN cd SongsinkWebApi && dotnet restore
COPY . ./

RUN dotnet publish SongsinkWebApi -c Release -o publish --no-restore

#-------------------------------------------------------------------
FROM mcr.microsoft.com/dotnet/aspnet:5.0 as runtime
WORKDIR /src
COPY --from=build /src/publish ./
CMD [ "dotnet", "SongsinkWebApi.dll" ]
EXPOSE 80