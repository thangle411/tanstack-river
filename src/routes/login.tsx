import { useState } from 'react'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import Button from '@/components/Buttons/Button'

export const Route = createFileRoute('/login')({
    component: RouteComponent,
})

function RouteComponent() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full xl:px-70 px-10 flex flex-row items-center justify-between px-6 py-4'>
                <img src="/logo.svg" alt="" />
            </div>
            <div className="flex flex-col flex-1 w-full max-w-screen-xl items-center">
                <article className="flex flex-col self-center sm:mx-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xl:w-full overflow-hidden w-full items-center mx-4">
                    <section className="flex flex-col items-center w-full mt-6 sm:mt-12 mx-0">
                        <div className="w-full max-w-[448px] md:mx-auto xs:px-0">
                            <h1 className="body-large-plus text-neutral-50 text-left w-full title-small !font-medium">
                                Log in to River
                            </h1>

                            <form className="mt-8">
                                <label className="text-neutral-50 body-regular block">
                                    <div className="w-full">
                                        Email address
                                        <input
                                            autoComplete="off"
                                            autoFocus
                                            className="body-small border-solid border rounded text-neutral-50 body-regular border-neutral-700 mt-2 placeholder-neutral-400 py-2.5 px-4 box-border w-full bg-neutral-850 focus:border-primary-500"
                                            id="session_email"
                                            name="session[email]"
                                            placeholder="Enter email address"
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </label>

                                <label className="text-neutral-50 body-regular pt-6 block">
                                    <div className="w-full">
                                        Password
                                        <div className="relative">
                                            <div
                                                onClick={() => setShowPassword(!showPassword)}
                                                tabIndex={-1}
                                                className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer ${showPassword ? 'hide_password_svg' : 'show_password_svg'}`}
                                            >
                                            </div>
                                            <input
                                                id="session_password"
                                                name="session[password]"
                                                className="body-small border-solid border rounded text-neutral-50 body-regular border-neutral-700 mt-2 placeholder-neutral-400 py-2.5 px-4 box-border w-full bg-neutral-850 focus:border-primary-500"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Enter password"
                                            />
                                        </div>
                                    </div>
                                </label>

                                <div className="mb-6 mt-2">
                                    <Link className="body-small text-primary-500" to="/support">
                                        Forgot password?
                                    </Link>
                                </div>

                                <Link to="/">
                                    <Button variant="primary" classes="w-full">
                                        Continue
                                    </Button>
                                </Link>
                            </form>

                            <div className="mt-4 body-small text-center text-neutral-50">
                                Don't have a River account?{' '}
                                <Link className="text-primary-500 body-small" to="/">
                                    Sign up here
                                </Link>
                            </div>

                            <div className="w-full space-y-4 px-4 text-center text-[11px] text-xs text-neutral-400 mt-8">
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-700">
                                    Privacy Policy
                                </a>{' '}
                                and{' '}
                                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-xs text-primary-700">
                                    Terms of Service
                                </a>{' '}
                                apply
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    )
}
