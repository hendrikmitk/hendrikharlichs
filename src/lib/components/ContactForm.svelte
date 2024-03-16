<script lang="ts">
	import { SubmissionStatus } from '$lib/enum';
	import { submissionStatus } from '$lib/store';
	import type { Submission } from '$lib/types';

	let formData: Submission = {
		name: undefined,
		email: undefined,
		message: undefined
	};

	let errors: Record<keyof Submission, boolean> = {
		name: false,
		email: false,
		message: false
	};

	const onChangeHandler = (event: Event) => {
		/** @note workaround to reset the validation errors */
		const inputElement = event.target as HTMLInputElement;
		errors[inputElement.name as keyof Submission] = false;
	};

	const handleSubmit = async () => {
		/** @note validate all user input on submit attempt */
		for (const [key, value] of Object.entries(formData)) {
			errors[key as keyof Submission] = value ? false : true;
		}
		if (Object.values(errors).includes(true)) return;

		submissionStatus.set(SubmissionStatus.Submitting);

		const res: Response = await fetch('/api/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		const { status } = await res.json();

		submissionStatus.set(status as SubmissionStatus);
	};
</script>

<form
	name="contact"
	method="post"
	on:submit|preventDefault={handleSubmit}
	autocomplete="off"
>
	<div class="form-field">
		<label for="name">Name</label>
		<input
			type="text"
			name="name"
			bind:value={formData.name}
			class:invalid={errors.name}
			on:input={onChangeHandler}
			placeholder={errors.name
				? 'Name must be filled in'
				: 'What should I call you?'}
		/>
	</div>
	<div class="form-field">
		<label for="email">Email</label>
		<input
			type="email"
			name="email"
			bind:value={formData.email}
			class:invalid={errors.email}
			on:input={onChangeHandler}
			placeholder={errors.email
				? 'Email must be provided'
				: 'How can I reach you?'}
		/>
	</div>
	<div class="form-field">
		<label for="message">Message</label>
		<textarea
			name="message"
			bind:value={formData.message}
			class:invalid={errors.message}
			on:input={onChangeHandler}
			rows="4"
			placeholder={errors.message
				? 'Message cannot be empty'
				: 'What is it about?'}
		/>
	</div>
	<button type="submit">Submit</button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
		position: relative;
		row-gap: 0.75rem;

		.form-field {
			display: flex;
			flex-direction: column;
			row-gap: 0.25rem;

			label {
				font-weight: bold;
			}

			input,
			textarea {
				background: transparent;
				border-radius: 0.25rem;
				border: 0.125rem solid var(--color--form-input-border);
				padding: 0.25rem 0.375rem;

				&:focus-visible {
					outline-offset: 2px;
					outline: 0.125rem solid var(--color--form-input-focus-outline);
				}

				&::placeholder {
					color: var(--color--form-input-placeholder);
				}

				&.invalid {
					outline-offset: 2px;
					outline: 0.125rem solid var(--color--error);

					&::placeholder {
						color: var(--color--error);
					}
				}
			}

			textarea {
				resize: none;
			}
		}

		button {
			appearance: none;
			background-color: var(--color--form-button-accent);
			border-radius: 0.25rem;
			border: 0.125rem solid var(--color--form-button-accent);
			color: var(--color--form-button-invert);
			cursor: pointer;
			font-size: 1.25rem;
			font-weight: bold;
			margin-top: 0.75rem;
			padding: 0.25rem 2.75rem;
			transition: all 180ms ease-in-out;
			user-select: none;

			@include for(tablet-and-up) {
				align-self: flex-start;
				margin-top: 1.25rem;

				&:hover {
					background-color: var(--color--form-button-invert);
					color: var(--color--form-button-accent);
				}
			}
		}
	}
</style>
