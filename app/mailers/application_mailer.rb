class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def contact_form(contact)
    @contact = contact
    @to = "marine.payet.web@gmail.com"

    mail(to: @to, subject: "Nouveau contact depuis le site") do |format|
      format.html
    end
  end
end
