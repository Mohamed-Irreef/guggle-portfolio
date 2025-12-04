# PowerShell script to remove console statements
# Run from client directory

Get-ChildItem -Path "src" -Recurse -File -Exclude "node_modules","dist",".git" | Where-Object { $_.FullName -notmatch "node_modules|dist|\.git" } | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # Remove console.log, console.error, console.warn, console.info lines
    $newContent = $content -replace "(?m)^.*console\.(log|error|warn|info|debug|trace)\(.*\);\s*$", ""
    if ($newContent -ne $content) {
        Set-Content $_.FullName $newContent -NoNewline
        Write-Host "Cleaned console in $($_.FullName)"
    }
}

Write-Host "Console statements removed. Review changes."