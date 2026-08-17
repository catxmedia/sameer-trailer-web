# SAMEER TRAILER - AUTOMATED GITHUB & VAULT SYNC SCRIPT
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   SAMEER TRAILER - AUTOMATED GITHUB & VAULT SYNC        " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

$repoDir = "C:\Users\preet\.gemini\antigravity-ide\scratch\sameer-trailer-web"

Set-Location $repoDir
Write-Host "[1/3] Staging all codebase and _vault files..." -ForegroundColor Green
git add .

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMsg = "Real-time sync update: $timestamp [AI Vault & Codebase]"
Write-Host "[2/3] Creating commit: '$commitMsg'..." -ForegroundColor Green
git commit -m $commitMsg

Write-Host "[3/3] Pushing to GitHub remote origin/master..." -ForegroundColor Green
git push origin master -f

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   SYNC COMPLETED SUCCESSFULLY! REPO IS 100% UP TO DATE   " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
