import React from 'react'
import EpisodePlayer from './EpisodePlayer'


const AnchorPlaylist = ({ data }) => {
    const [episodeList, setEpisodeList] = React.useState(data.items)
    const [currentEpisode, setCurrentEpisode] = React.useState(null)
    React.useEffect(() => {
        setCurrentEpisode(episodeList[0])
    }, [currentEpisode])
    return (
        <div>
            {/* <EpisodePlayer currentEpisode={currentEpisode} /> */}
            {currentEpisode && <EpisodePlayer episodes={episodeList} />}

        </div>
    )
}

export default React.memo(AnchorPlaylist)
