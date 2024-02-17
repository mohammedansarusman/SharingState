
const Panel = ({title,children,flag,onShow}) => {
    
    return (
        <div>
            <div className="heading" onClick={onShow}>
                <p>{title}</p>
            </div>
            <div className="content">
                <p>{flag && children}</p>
            </div>            

        </div>
    )
}
export default Panel;