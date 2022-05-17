type Payment = {
    email: string
    amount: number
    address: string
}

interface PaymentSenderInterface {
    send(payment: Payment): void
}

interface MailerInterface {
    send(email: string): void
}

interface LoggerInterface {
    info(msg: string): void
    error(msg: string): void
}

class PaymentService {
    constructor(
        private paymentSender: PaymentSenderInterface,
        private mailer: MailerInterface,
        private logger: LoggerInterface
    ) {
        this.paymentSender = paymentSender
        this.mailer = mailer
        this.logger = logger
    }

    handle(payment: Payment) {
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
    send(payment: Payment) {
        console.log('Pretend this sends a payment', payment)
    }
}

class PaymentSenderThatErrors {
    send(payment: Payment) {
        throw new Error('💀' + payment.amount)
    }
}

class Mailer {
    send(email: string): void {
        console.log('Pretend this sends an email', email)
    }
}

class Logger {
    info(msg: string): void {
        console.log('Pretend this logs an info message', msg)
    }

    error(msg: string): void {
        console.log('Pretend this logs an error message', msg)
    }
}

class TestingLogger {
    private lastMessage: string | null = null

    info(msg: string): void {
        this.lastMessage = msg
    }

    error(msg: string): void {
        this.lastMessage = msg
    }
}

// meanwhile in some controller
{
    const paymentSender = new PaymentSender()
    const mailer = new Mailer()
    const logger = new Logger()

    const paymentService = new PaymentService(paymentSender, mailer, logger)

    const payment: Payment = {
        amount: 500,
        address: 'Bank of Canada',
        email: 'jj@email.net',
    }

    paymentService.handle(payment)
}

// or using a dependency injection framework
class PaymentController {
    constructor(private paymentService: PaymentService) {}

    pay() {
        const payment: Payment = {
            amount: 500,
            address: 'Bank of Canada',
            email: 'jj@email.net',
        }

        this.paymentService.handle(payment)
    }
}
