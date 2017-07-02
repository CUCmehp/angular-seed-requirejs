@echo off

REM Windows script for running e2e tests
REM You have to run server and capture some browser first
REM
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Protractor (npm install -g protractor)

set BASE_DIR=%~dp0
protractor "%BASE_DIR%\..\test\protractor.conf.js"
pause