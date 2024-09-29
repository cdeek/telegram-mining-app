import { createContext, useEffect, useState, useContext } from 'react';
import { User } from './schema';

const Context = createContext();

let telegramUser;

export default function ContextProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> unsubscribe(),[]);
 
  const unsubscribe = useCallback<Create>(async => {
    setLoading(true);
    try {
      const userSnap = const await User.findOne({telegramUser});
      if (userSnap) {
        setUser(userSnap);
      } else {
        const newUser = await User.create({
          telegramUser.id,
          coins: 0,
          energy: 100,
          level: 1
        });
        setUser(newUser);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
    setLoading(false);
  }, []);
  
  const claimToken = async (userId) => {
    const TOKEN_AMOUNT = 10; // Number of tokens the user can claim
    try {
        // Find the user by their ID
        const user = await User.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const now = new Date(); // Server's current time
        const lastClaim = user.lastClaim;

        // Helper function to strip time and use only the date in UTC
        const isSameDayUTC = (d1, d2) => 
            d1.getUTCFullYear() === d2.getUTCFullYear() &&
            d1.getUTCMonth() === d2.getUTCMonth() &&
            d1.getUTCDate() === d2.getUTCDate();

        // Check if the user has already claimed today (in UTC)
        if (lastClaim && isSameDayUTC(now, lastClaim)) {
            throw new Error('You have already claimed your tokens today.');
        }

        // If eligible, update user's balance and set the new last claim time
        user.coins += TOKEN_AMOUNT;
        user.lastClaim = now;

        // Save the updated user
        await user.save();

        return { success: true, message: `You claimed ${TOKEN_AMOUNT} tokens!`, balance: user.balance };
    } catch (error) {
        return { success: false, message: error.message };
    }
  };
  
  const values = {user, loading};
  
  return(
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export const getData = () => {
  const context = useContext(Context)

  if(!context) {
    throw Error('context must be used inside an ContextProvider.')
  }

  return context;
}

// const now = new Date();
//   const hoursSinceLastClaim = user.lastClaimed 
//     ? (now - new Date(user.lastClaimed)) / (1000 * 60 * 60) 
//     : Infinity;

//   if (hoursSinceLastClaim >= 24) {
//     // User can claim tokens
//     user.coins += 1; // or whatever token amount you're awarding
//     user.lastClaimed = now;
//     await user.save();
    
//     return { success: true, message: 'Token claimed successfully!' };
//   } else {
//     const remainingHours = (24 - hoursSinceLastClaim).toFixed(2);
//     return { success: false, message: `You can claim your next token in ${remainingHours} hours.` };
//   }