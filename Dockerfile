# Gunakan image Node.js resmi
FROM node:18

# Set direktori kerja dalam container
WORKDIR /

# Salin package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file source ke dalam container
COPY . .

# Jalankan aplikasi
CMD ["node", "main.js"]

# Buka port 21110 (atau port sesuai di app)
EXPOSE 21110
