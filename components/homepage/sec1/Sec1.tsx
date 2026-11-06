import './Sec1.css';
import sec1Background from './assets/sec1-background.png';

export default function Sec1() {
    return (
        <div className='sec1-container'>
            <div className='content-pc'>
                <img src={sec1Background['src']} className='sec1-background' alt='sec1-background'/>
                <div className='center-container'>
                    <div className='text-container'>
                        <div className='title'>Instant collaboration for remote teams</div>
                        <div className='desc'>
                            All-in-one place for your remote team to <br/>
                            chat, collaborate and track project progress.
                        </div>
                        <div className='email-container'>
                            <input/>
                            <div className='main-button'>Get Early Access</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}