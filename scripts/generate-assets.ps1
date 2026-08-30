param(
  [string]$SourceDirectory = "Project_Source\Images",
  [string]$OutputDirectory = "assets\images"
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force $OutputDirectory | Out-Null

function Save-JpegVariant {
  param([string]$Source, [string]$Destination, [int]$Width, [long]$Quality)
  $sourceImage = [System.Drawing.Image]::FromFile($Source)
  try {
    $height = [int][Math]::Round($sourceImage.Height * ($Width / [double]$sourceImage.Width))
    $bitmap = New-Object System.Drawing.Bitmap($Width, $height)
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($sourceImage, 0, 0, $Width, $height)
      } finally { $graphics.Dispose() }
      $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq "image/jpeg"
      $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
      $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $Quality)
      try { $bitmap.Save($Destination, $codec, $parameters) } finally { $parameters.Dispose() }
    } finally { $bitmap.Dispose() }
  } finally { $sourceImage.Dispose() }
}

Copy-Item -LiteralPath (Join-Path $SourceDirectory "NextPhaze Logo.png") -Destination (Join-Path $OutputDirectory "nextphaze-logo.png") -Force
Save-JpegVariant (Join-Path $SourceDirectory "Carrington Action Shot.png") (Join-Path $OutputDirectory "carrington-action-480.jpg") 480 82
Save-JpegVariant (Join-Path $SourceDirectory "Carrington Action Shot.png") (Join-Path $OutputDirectory "carrington-action-768.jpg") 768 84
Save-JpegVariant (Join-Path $SourceDirectory "Carrington Action Shot.png") (Join-Path $OutputDirectory "carrington-action-971.jpg") 971 86
Save-JpegVariant (Join-Path $SourceDirectory "Image of Carrington.png") (Join-Path $OutputDirectory "carrington-portrait-360.jpg") 360 84
Save-JpegVariant (Join-Path $SourceDirectory "Image of Carrington.png") (Join-Path $OutputDirectory "carrington-portrait-550.jpg") 550 86

Get-ChildItem $OutputDirectory -File | Select-Object Name, Length
