import "./Sec2.css"
import item1Image from './assets/sec2-item1.png';
import item2Image from './assets/sec2-item2.png';
import item3Image from './assets/sec2-item3.png';
import item4Image from './assets/sec2-item4.png';
import arrowRight from './assets/sec2-arrow-right.png';

const itemsSrc: any[] = [item1Image?.src, item2Image?.src, item3Image?.src, item4Image?.src];

export default function Sec2() {
    return (
        <div className='sec2-container'>
            <div className='content-pc'>
                <div className='center-container'>
                    <div className='text-container'>
                        <div className='title-dark'>Chats for your distributed teams</div>
                        <div className='desc-dark'>
                            Team combines the immediacy of real-time chat with an email threading model.
                            With Team, you can catch up on important conversations while ignoring irrelevant ones.
                        </div>
                        <div className='action-container'>
                            <div className='text'>Learn more</div>
                            <div className='arrow-right'>
                                <img src={arrowRight?.src} alt='arrow-right'/>
                            </div>
                        </div>
                    </div>
                    <div className='items-container'>
                        {itemsSrc.map((img, index) => (
                            <img src={img} className={`item item-${index + 1}`} alt={`item item-${index + 1}`}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}