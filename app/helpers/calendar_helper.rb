module CalendarHelper
	def tday
		Date.today
	end

	def m
		tday.month
	end

	def y
		tday.year
	end

	def day_count
		Time.days_in_month(m, y)
	end

	def day_list
		Date::DAYNAMES
	end

	def prepend_count
		Date::DAYNAMES.index(tday.beginning_of_month.strftime("%A"))
	end

	def append_count
		7 - (Date::DAYNAMES.index(tday.end_of_month.strftime("%A")) + 1)
	end

	def date_container_builder
		(1..day_count).to_a.append(['x'] * append_count).prepend(['x'] * prepend_count).flatten
	end

	def where_in_day
		hr = Time.now.hour
		salute = "Evening"

		if hr < 12
			salute = "Morning"
		elsif hr < 5
			salute = "Afternoon"
		end

		salute
	end
end
