'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import './Stack.css';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return <div className="card-rotate-disabled">{children}</div>;
  }

  return (
    <motion.div
  className="card"
  style={{
    pointerEvents: index === stack.length - 1 ? 'auto' : 'none'
  }}
  onMouseEnter={() => sendToBack(card.id)}
  animate={{
    rotateZ: (stack.length - index - 1) * 4 + randomRotate,
    scale: 1 - index * 0.04,
    transformOrigin: '90% 90%'
  }}
  transition={{
    type: 'spring',
    stiffness: 70,
    damping: 30,
    mass: 1.8
  }}
>
  {card.content}
</motion.div>


  );
}


export default function Stack({
  cards = [],
  randomRotation = true,
  sensitivity = 180
}) {
  const [stack, setStack] = useState(
    cards.map((content, index) => ({ id: index, content }))
  );

  const sendToBack = id => {
    setStack(prev => {
      const copy = [...prev];
      const index = copy.findIndex(c => c.id === id);
      const [card] = copy.splice(index, 1);
      copy.unshift(card);
      return copy;
    });
  };

  return (
    <div className="stack-container">
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 6 - 3 : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag
          >
            <motion.div
              className="card"
             onMouseEnter={() => {
  setTimeout(() => {
    sendToBack(card.id);
  }, 500);
}}

              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 - index * 0.04,
                transformOrigin: '40% 40%'
              }}
              transition={{ type: 'spring',
  stiffness: 60,
  damping: 35,
  mass: 2   }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}


