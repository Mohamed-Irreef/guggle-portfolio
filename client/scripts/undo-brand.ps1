# PowerShell script to undo Guggle branding back to Google
# Run from project root

# Function to replace in files
function Replace-InFiles {
    param (
        [string]$Path,
        [string]$OldString,
        [string]$NewString
    )
    Get-ChildItem -Path $Path -Recurse -File -Exclude "node_modules","dist",".git" | Where-Object { $_.FullName -notmatch "node_modules|dist|\.git" } | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        if ($content -match $OldString) {
            $newContent = $content -replace $OldString, $NewString
            Set-Content $_.FullName $newContent -NoNewline
            Write-Host "Replaced in $($_.FullName)"
        }
    }
}

# Replace branding text back to Google
Replace-InFiles -Path "client/src" -OldString "Guggle-Themed" -NewString "Google-Themed"
Replace-InFiles -Path "client/src" -OldString "Guggle-themed" -NewString "Google-themed"
Replace-InFiles -Path "client/src" -OldString "Guggle-like" -NewString "Google-like"
Replace-InFiles -Path "client/src" -OldString "Guggle blue" -NewString "Google blue"
Replace-InFiles -Path "client/src" -OldString "Guggle's clean UI" -NewString "Google's clean UI"
Replace-InFiles -Path "client/src" -OldString "Guggle" -NewString "Google"

# Rename assets back
if (Test-Path "client/public/guggle-ai-icon.svg") {
    Rename-Item "client/public/guggle-ai-icon.svg" "client/public/Guggle-ai-icon.svg"
}
if (Test-Path "client/public/guggle.png") {
    Rename-Item "client/public/guggle.png" "client/public/google.png"
}

# Update references back
Replace-InFiles -Path "client/src" -OldString "/guggle-ai-icon.svg" -NewString "/Guggle-ai-icon.svg"
Replace-InFiles -Path "client/index.html" -OldString "Guggle" -NewString "Google"

Write-Host "Branding undo complete. Review changes before committing."