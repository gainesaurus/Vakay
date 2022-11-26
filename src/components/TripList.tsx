import React, { FC } from 'react'
import TripItem from './TripItem';
import styles from '../../styles/TripList.module.css';

import { ITripItem } from '../../Types';

interface TripListProps {
  trips: ITripItem[];
}

const TripList: FC<TripListProps> = ({ trips }) => {


  return (
    <div className={styles.listCont}>
      {trips.map((item:ITripItem) => {
        return <TripItem key={item.id} item={item}/>
      })}
    </div>
  )
}

export default TripList;