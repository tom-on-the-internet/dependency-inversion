class PaymentService {
    constructor(paymentSender, mailer, logger) {
        this.paymentSender = paymentSender
        this.mailer = mailer
        this.logger = logger
    }

    handle(payment) {
        try {
            this.paymentSender.send(payment)
        } catch (err) {
            this.logger.error(err)

            return
        }

        this.mailer.send(payment.email)
    }
}

class PaymentSender {
    send(payment) {
        console.log('Pretend this sends a payment', payment)
    }
}

class Mailer {
    send(email) {
        console.log('Pretend this sends an email', email)
    }
}

class Logger {
    info(msg) {
        console.log('Pretend this logs an info message', msg)
    }

    error(msg) {
        console.log('Pretend this logs an error message', msg)
    }
}

// meanwhile in some controller
{
    const paymentSender = new PaymentSender()
    const mailer = new Mailer()
    const logger = new Logger()

    const paymentService = new PaymentService(paymentSender, mailer, logger)

    const payment = {
        amount: 500,
        address: 'Bank of Canada',
        email: 'jj@email.net',
    }

    paymentService.handle(payment)
}
