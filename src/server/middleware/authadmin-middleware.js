
const adminMiddleware = {
    checkAdmin : (req, res, next) => {
        const isAdmin = req.session.isAdmin; 
        console.log(req.session)
        if (isAdmin) 
          next();
        else
          res.status(403).json({ message: "Access denied. You do not have administrator privileges." });
    }
}

export default adminMiddleware;