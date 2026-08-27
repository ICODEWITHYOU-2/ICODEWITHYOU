@echo off
cd /d "%~dp0"
echo Starting the dev server...
start "icodewithyou dev server" cmd /k npm run dev
timeout /t 5 /nobreak >nul
start "" http://localhost:3000
