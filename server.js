require('dotenv').config(); // Para carregar variáveis de ambiente
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let onlineUsers = 0;
let userHistory = []; // Histórico de usuários online

// Monitoramento de Conexões
io.on('connection', (socket) => {
  onlineUsers++;
  userHistory.push({ timestamp: new Date(), users: onlineUsers });

  socket.on('disconnect', () => {
    onlineUsers--;
    userHistory.push({ timestamp: new Date(), users: onlineUsers });
  });
});

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // E-mail do remetente
    pass: process.env.EMAIL_PASS, // Senha ou App Password do remetente
  },
});

// Função para enviar o relatório semanal
const sendWeeklyReport = () => {
  const emailContent = userHistory.map(
    (entry) => `Data: ${entry.timestamp}, Usuários Online: ${entry.users}`
  ).join('\n');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO, // E-mail do destinatário
    subject: 'Relatório Semanal de Usuários Online',
    text: `Relatório semanal:\n\n${emailContent}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
    } else {
      console.log('E-mail enviado:', info.response);
    }
  });

  // Limpa o histórico semanal após envio
  userHistory = [];
};

// Agendamento para envio a cada 10 minutos
cron.schedule('*/10 * * * *', sendWeeklyReport);

// Servir a página inicial (HTML simples sem exibição do número de usuários)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Porta dinâmica para produção
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});