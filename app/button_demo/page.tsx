import {Button} from '@/components/ui/button'



export default function ButtonDemoPage(){
    return (
        <div className = "flex flex-row min-h-screen items-center justify-center">
            <Button>Default</Button>
            <Button  variant = {'secondary'}> Secondary </Button>
            <Button  variant = {'outline'}> Oultine </Button>
            <Button  variant = {'ghost'}> Ghost </Button>
            <Button  variant = {'link'}> Link </Button>
            <Button  variant = {'destructive'}> destructive </Button>
        </div>
    )
}