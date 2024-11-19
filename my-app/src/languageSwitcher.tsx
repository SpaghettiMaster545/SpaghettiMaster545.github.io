import { Button } from "@/components/ui/button";
import { useLanguage } from './languageContext';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'pl' ? 'en' : 'pl')}
            className="font-medium"
        >
            {language === 'pl' ? 'EN' : 'PL'}
        </Button>
    );
}