class PaymentService {
    handle(payment) {
        const sender = new PaymentSender(payment) // NEW IS GLUE

        try {
            sender.send(payment)
        } catch (err) {
            // How can we test this error condition?
            const logger = new Logger()
            logger.error(err)

            return
        }

        // We need to mock this or it will actually send mail
        const mailer = new Mailer()
        mailer.send(payment.email)
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
    const paymentService = new PaymentService()
    const payment = {
        amount: 500,
        address: 'Bank of Canada',
        email: 'jj@email.net',
    }

    paymentService.handle(payment)
}
