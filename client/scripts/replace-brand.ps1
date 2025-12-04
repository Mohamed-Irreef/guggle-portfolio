# PowerShell script to replace "Guggle" with "Guggle" in branding text
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

# Replace branding text (avoid URLs and API keys)
Replace-InFiles -Path "src" -OldString "Guggle-Themed" -NewString "Guggle-Themed"
Replace-InFiles -Path "src" -OldString "Guggle-themed" -NewString "Guggle-themed"
Replace-InFiles -Path "src" -OldString "Guggle-like" -NewString "Guggle-like"
Replace-InFiles -Path "src" -OldString "Guggle blue" -NewString "Guggle blue"
Replace-InFiles -Path "src" -OldString "Guggle’s clean UI" -NewString "Guggle’s clean UI"
Replace-InFiles -Path "." -OldString "Guggle" -NewString "Guggle"

# Rename assets
if (Test-Path "client/public/Guggle-ai-icon.svg") {
    Rename-Item "client/public/Guggle-ai-icon.svg" "client/public/guggle-ai-icon.svg"
}

# Update references
Replace-InFiles -Path "client/src" -OldString "/Guggle-ai-icon.svg" -NewString "/guggle-ai-icon.svg"

Write-Host "Branding replacement complete. Review changes before committing."