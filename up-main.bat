@echo off
setlocal

for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%i
if /I not "%BRANCH%"=="main" (
  echo Du bist nicht auf 'main' (aktuell: %BRANCH%). Abbruch.
  pause
  exit /b 1
)

if "%~1"=="" (
  set /p msg="Commit message (main): "
) else (
  set msg=%*
)

git add -A
git commit -m "%msg%"
git push origin main

echo.
echo Pushed to main.
pause
