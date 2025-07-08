import { motion } from "framer-motion";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-brand">Welcome to Aetherfog</h1>
        <p className="text-lg text-gray-300">
          Your shadow company in the cloud.
        </p>
      </motion.div>
    </main>
  );
}

export default App;
