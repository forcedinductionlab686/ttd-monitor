@echo off
echo ================================================
echo   TTD Trade Thesis Monitor - Vercel Deployment
echo ================================================
echo.

echo Step 1: Login to Vercel (browser will open)
call vercel login
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Vercel login failed
    pause
    exit /b 1
)

echo.
echo Step 2: Deploy to Vercel
call vercel --prod
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ================================================
echo   Deployment Complete!
echo ================================================
echo.
echo IMPORTANT: Set your environment variable in Vercel Dashboard:
echo 1. Go to your project settings on vercel.com
echo 2. Navigate to Environment Variables
echo 3. Add: ANTHROPIC_API_KEY = your_anthropic_api_key_here
echo 4. Redeploy if needed
echo.
pause
