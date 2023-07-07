
const adminMiddleware = {
    checkAdmin : (req, res, next) => {
        const email = req.cookies.isAdmin; 
        
        if (email) {
          // O usuário é um administrador, continue para a próxima etapa
          next();
        } else {
          // O usuário não é um administrador, retorne um erro de acesso negado
          res.status(403).json({ message: "Acesso negado. Você não possui privilégios de administrador." });
        }
    }
}

export default adminMiddleware;