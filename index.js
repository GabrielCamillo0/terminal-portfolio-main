import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve o caminho do diretório atual (necessário para módulos ES)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configura a pasta estática para servir os arquivos do projeto
app.use(express.static(__dirname));

// Redireciona todas as requisições para o arquivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
