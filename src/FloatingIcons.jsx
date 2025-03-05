import { motion } from "framer-motion";

const icons = [
  "js", "typescript", "java", "react", "nextjs", "reactnative",
  "nodejs", "express", "spring", "vite",
  "mongodb", "mysql", "postgresql", "firebase",
  "tailwind", "bootstrap", "shadcn", "materialui"
];

const FloatingIcons = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Background Icons */}
      <div className="fixed inset-0 overflow-hidden">
        {icons.map((icon, index) => (
          <motion.img
            key={index}
            src={`https://go-skill-icons.vercel.app/api/icons?i=${icon}`}
            alt={icon}
            className="absolute w-16 h-16 opacity-10"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, -10, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 3,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FloatingIcons;
