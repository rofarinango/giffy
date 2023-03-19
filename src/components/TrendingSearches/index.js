import React, {Suspense} from 'react';
import useNearScreen from 'hooks/useNearScreen';

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending(){
    const {isNearScreen, fromRef} = useNearScreen({distance:'200px'});
    return (
        <div ref={fromRef}>
            <Suspense fallback={'loading...'}>
                {isNearScreen ? <TrendingSearches/> : 'loading...'}
            </Suspense>
        </div>
    )
}
