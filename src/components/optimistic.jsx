import { startTransition } from "react";
import { useOptimistic } from "react";
import { useState } from "react"

export function Optimistic() {
    const [isLiked, setLiked] = useState(false);
    const [optimisticLiked, setOptimisticLiked] = useOptimistic(isLiked)
    async function likeClicked() {
        startTransition(async () => {
            setOptimisticLiked(prev => !prev)
            //API call to save liked, ex API response takes 5 seconds
             await new Promise(res => setTimeout(res, 5000));
            // real update
            setLiked(prev => 'error');
        })
    }
    return (
        <div>
            <p>Optimistic: {String(optimisticLiked)}</p>
            <p>Actual state: {String(isLiked)}</p>
            <button onClick={() => likeClicked()}><i>👍🏼</i></button>
            { (!!optimisticLiked && optimisticLiked !=='error')  && <>Liked!</>} 
        </div>
    )
}