import { TimelineItem } from '../../../data/experiences'
import Card from '../Card'

const TimelineItem: React.FC<TimelineItem> = ({
  title,
  company,
  date,
  description,
  isLast = false,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="text-center md:w-1/3 flex flex-col gap-2">
            <h3 className="text-slate-800 dark:text-slate-500 text-lg font-light">
              {`${company} { ${date} }`}
            </h3>
            <h2 className="text-black dark:text-white font-bold text-xl">
              {title}
            </h2>
            <div></div>
          </div>

          <div
            className="text-slate-600 dark:text-slate-400 text-base md:w-2/3"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </Card>
      {!isLast && (
        <div className="text-blue-500 dark:text-lime-400 text-4xl">↓</div>
      )}
    </div>
  )
}

export default TimelineItem
