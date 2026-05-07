#!/bin/bash
echo "Iniciando despliegue de Tricode en S3..."
aws s3 sync . s3://tricode-run-decode-981005111387 --exclude "node_modules/*" --exclude "*.zip" --exclude "*.tar.gz"
echo "Despliegue finalizado correctamente."
