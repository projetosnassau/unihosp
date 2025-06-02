import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("[AUTH MIDDLEWARE] autenticarToken - Header:", authHeader);
  console.log("[AUTH MIDDLEWARE] autenticarToken - Token extraído:", token);

  if (!token) {
    console.warn("[AUTH MIDDLEWARE] autenticarToken - Token não fornecido.");
    return res.status(401).json({ error: "Token não fornecido. Faça login para continuar." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) {
      console.error("[AUTH MIDDLEWARE] autenticarToken - Erro na verificação do JWT:", err.message, "| Token problemático:", token);
      if (err.name === 'TokenExpiredError') {
        return res.status(403).json({ error: "Token expirado. Faça login novamente." });
      }
      return res.status(403).json({ error: "Token inválido ou malformado." });
    }
    req.usuario = usuario;
    console.log("[AUTH MIDDLEWARE] autenticarToken - Usuário autenticado no middleware:", JSON.stringify(req.usuario, null, 2));
    next();
  });
}

export function autorizarTipos(...tiposPermitidos) {
  return (req, res, next) => {
    if (!req.usuario || typeof req.usuario.tipo === 'undefined') {
      return res.status(403).json({ error: "AUTORIZACAO_FALHOU_INFO_USUARIO_AUSENTE" });
    }
    
    console.log(`[AUTH MIDDLEWARE] autorizarTipos: User ID ${req.usuario.id}, Tipo '${req.usuario.tipo}'. Permitido: [${tiposPermitidos.join(', ')}]`);

    if (!tiposPermitidos.includes(req.usuario.tipo)) {
      return res.status(403).json({ error: "AUTORIZACAO_FALHOU_TIPO_NAO_PERMITIDO" });
    }
    next();
  };
}