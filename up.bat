@echo off
setlocal

REM Frage Commit-Message ab (wenn kein Parameter)
if "%~1"=="" (
  set /p msg="Commit message: "
) else (
  set msg=%*
)
git pull
git add -A
git commit -m "%msg%"

for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%i
git push -u origin %BRANCH%

echo.
echo Pushed branch: %BRANCH%
pause
