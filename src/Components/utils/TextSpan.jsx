import {motion} from 'framer-motion'
const TextSpan = ({children, className}) => {
    return (
        <motion.span className={className} whileHover={{ scale: 1.5 }} >
            {children}
        </motion.span>
    );
};

export default TextSpan;