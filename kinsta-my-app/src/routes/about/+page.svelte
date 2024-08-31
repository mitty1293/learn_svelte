<div class="about_cont">
    <h2>About</h2>
    <div class="about_info">
        <div class="about_text">
            <p>
                <a href="https://example.co.jp">
                    example.co.jp
                </a>{' '}
                example.co.jp
            </p>
        </div>
    </div>
</div>

<style>
    .about_cont h2 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    .about_info {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
    }
    @media (max-width: 700px) {
        .about_info {
            flex-direction: column;
        }
    }
    .about_text {
        flex-basis: 50%;
    }
    .about_text p {
        margin-bottom: 20px;
        font-size: 18px;
    }
    @media (max-width: 700px) {
        .about_info {
            flex-direction: column;
        }
    }
</style>