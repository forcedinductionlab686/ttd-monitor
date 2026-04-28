@echo off
echo ================================================
echo   TTD Trade Thesis Monitor - Railway Deployment
echo ================================================
echo.

echo Step 1: Login to Railway (browser will open)
railway login
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Railway login failed
    pause
    exit /b 1
)

echo.
echo Step 2: Initialize Railway Project
railway init
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Railway init failed
    pause
    exit /b 1
)

echo.
echo Step 3: Setting Environment Variable
railway variables --set ANTHROPIC_API_KEY=your_anthropic_api_key_here
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to set environment variable
    pause
    exit /b 1
)

echo.
echo Step 4: Deploying to Railway
railway up
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo Step 5: Generating Public Domain
railway domain
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Domain generation may have failed
)

echo.
echo ================================================
echo   Deployment Complete!
echo ================================================
echo.
echo Your app should now be live at the URL shown above.
echo.
pause
